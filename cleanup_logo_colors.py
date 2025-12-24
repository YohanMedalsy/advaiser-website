from PIL import Image
import numpy as np

def cleanup_logo(input_path, output_path):
    print(f"Processing {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    r, g, b, a = data.T
    
    # Strategy: Keep "White" and "Cyan". Delete "Grayscale" (Checkerboard).
    
    # 1. Define White (Text)
    # High brightness in all channels. Lowered threshold to catch anti-aliasing.
    mask_white = (r > 180) & (g > 180) & (b > 180)
    
    # 2. Define Cyan (Circuits)
    # Cyan is Green + Blue. It must be significantly more colored than Red.
    # Gray background (99, 99, 94) has R ~= G ~= B.
    # Cyan pixels have G > R and B > R.
    # We add a margin to avoid noise.
    mask_cyan = (g.astype(int) > r.astype(int) + 20) & (b.astype(int) > r.astype(int) + 20)
    
    # 3. Combine to find pixels to KEEP
    mask_keep = mask_white | mask_cyan
    
    # 4. Invert to find pixels to REMOVE
    mask_remove = ~mask_keep
    
    # Apply removal
    data[..., 3][mask_remove.T] = 0
    
    # 5. Crop
    new_img = Image.fromarray(data)
    bbox = new_img.getbbox()
    if bbox:
        new_img = new_img.crop(bbox)
        print(f"Cropped image to {bbox}")
        
    new_img.save(output_path)
    print(f"Saved cleaned logo to {output_path}")

if __name__ == "__main__":
    cleanup_logo("public/logo-processed.png", "public/logo-processed.png")
