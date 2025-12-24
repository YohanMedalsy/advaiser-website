from PIL import Image
import numpy as np
from collections import deque

def remove_checkerboard(input_path, output_path):
    print(f"Processing {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    height, width = data.shape[:2]

    # 1. Identify Background Colors from the borders
    # Sample top, bottom, left, right borders (5 pixels deep)
    borders = []
    borders.append(data[0:5, :])          # Top
    borders.append(data[-5:, :])          # Bottom
    borders.append(data[:, 0:5])          # Left
    borders.append(data[:, -5:])          # Right
    
    # Concatenate all border pixels
    border_pixels = np.concatenate([b.reshape(-1, 4) for b in borders])
    
    # Find unique colors and counts
    unique_colors, counts = np.unique(border_pixels, axis=0, return_counts=True)
    
    # Sort by count
    sorted_indices = np.argsort(-counts)
    top_colors = unique_colors[sorted_indices]
    
    # Take top 2 colors (Checkerboard usually has 2)
    bg_colors = top_colors[:2]
    
    print(f"Identified Background Colors: {bg_colors}")

    # 2. Global Color Replacement
    # Instead of flood fill, we scan ALL pixels.
    # If a pixel matches one of the bg_colors (within tolerance), nuke it.
    
    # Create a mask for pixels to remove
    mask_remove = np.zeros((height, width), dtype=bool)
    
    tolerance = 25 # Higher tolerance for compression noise
    
    for bg_c in bg_colors:
        # Calculate distance for RGB channels only
        # data is (H, W, 4), bg_c is (4,)
        diff = np.abs(data[..., :3] - bg_c[:3])
        dist = np.sum(diff, axis=2)
        
        # Add to mask
        mask_remove |= (dist < tolerance)

    # Apply mask
    data[..., 3][mask_remove] = 0
    
    pixels_removed = np.sum(mask_remove)
    print(f"Removed {pixels_removed} background pixels.")

    # Create new image
    new_img = Image.fromarray(data)
    
    # 3. Crop
    bbox = new_img.getbbox()
    if bbox:
        new_img = new_img.crop(bbox)
        print(f"Cropped image to {bbox}")
    
    new_img.save(output_path)
    print(f"Saved cleaned logo to {output_path}")

if __name__ == "__main__":
    remove_checkerboard("public/logo-processed.png", "public/logo-processed.png")
