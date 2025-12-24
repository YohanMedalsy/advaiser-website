from PIL import Image
import numpy as np

def refine_logo(input_path, output_path):
    print(f"Processing {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)

    # Unpack channels
    r, g, b, a = data.T

    # 1. Brightness Threshold (Stricter than before)
    # Remove dark background pixels
    # 1. Brightness Threshold (Stricter than before)
    # Remove dark background pixels
    brightness = (r.astype(int) + g.astype(int) + b.astype(int)) / 3
    mask_dark = brightness < 60 

    # 2. Glow Removal (Alpha & Brightness)
    # The glow is likely semi-transparent or dimmer than the main lines.
    
    # A. Alpha Threshold (Aggressive)
    # Remove anything that isn't nearly solid.
    mask_faint = a < 230 

    # B. Dim Color Threshold
    # If it's Cyan (High G, High B) but not BRIGHT, it's likely the glow.
    # Main logo lines are very bright (near 255).
    # Glow is likely < 150 brightness.
    
    # Calculate perceived brightness
    brightness = (r.astype(int) * 0.299 + g.astype(int) * 0.587 + b.astype(int) * 0.114)
    
    # If it's a colored pixel (not black background) but dim, kill it.
    # We assume background is already handled by mask_dark (brightness < 60).
    # So we target pixels between 60 and 180 brightness that are "glowy".
    mask_dim_glow = (brightness > 60) & (brightness < 180)

    # Combine masks
    mask_remove = mask_dark | mask_faint | mask_dim_glow

    # Apply mask: Set alpha to 0
    data[..., 3][mask_remove.T] = 0

    # Create new image
    new_img = Image.fromarray(data)

    # Crop
    bbox = new_img.getbbox()
    if bbox:
        new_img = new_img.crop(bbox)
        print(f"Cropped image to {bbox}")
    else:
        print("Warning: Image is completely transparent!")

    new_img.save(output_path)
    print(f"Saved refined logo to {output_path}")

if __name__ == "__main__":
    # We use the original logo if possible, or the processed one if that's all we have.
    # Assuming 'public/logo.png' is the source.
    try:
        refine_logo("public/logo.png", "public/logo-processed.png")
    except FileNotFoundError:
        print("Could not find public/logo.png, trying to refine public/logo-processed.png")
        refine_logo("public/logo-processed.png", "public/logo-processed.png")
