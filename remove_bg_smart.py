from PIL import Image
import numpy as np

def process_logo_smart(input_path, output_path):
    print(f"Processing {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)

    # 1. Calculate Perceived Brightness (Luminance)
    # Extract channels directly to preserve (H, W) shape
    r = data[:, :, 0]
    g = data[:, :, 1]
    b = data[:, :, 2]
    
    brightness = (r.astype(float) * 0.299 + g.astype(float) * 0.587 + b.astype(float) * 0.114)

    # 2. Create Soft Alpha Mask
    # Instead of a hard threshold (if brightness < 50: remove), we map brightness to alpha.
    # Pixels purely black (0) -> Alpha 0
    # Pixels somewhat bright (e.g. 50) -> Alpha 255 (or keeping their original look)
    # Pixels in between (glow) -> Alpha proportional
    
    # Lower bound: Below this, it's definitely background (transparency = 0)
    LOWER_THRESHOLD = 5.0 
    # Upper bound: Above this, it's definitely logo/glow (fully opaque or original)
    UPPER_THRESHOLD = 60.0

    # Vectorized Alpha Calculation
    # Normalize brightness range [LOWER, UPPER] to [0, 255]
    new_alpha = (brightness - LOWER_THRESHOLD) / (UPPER_THRESHOLD - LOWER_THRESHOLD) * 255
    new_alpha = np.clip(new_alpha, 0, 255)

    # 3. Apply Alpha
    # We update the alpha channel.
    data[..., 3] = new_alpha.astype(np.uint8)

    # 4. Cleanup (Optional: Hard clip very dark pixels to ensure pure transparency)
    # already handled by clip(0, 255) where brightness < LOWER_THRESHOLD

    new_img = Image.fromarray(data)

    # 5. Crop
    bbox = new_img.getbbox()
    if bbox:
        new_img = new_img.crop(bbox)
        print(f"Cropped image to {bbox}")
    else:
        print("Warning: Image is completely transparent!")

    new_img.save(output_path)
    print(f"Saved smart-processed logo to {output_path}")

if __name__ == "__main__":
    # Process the new generic logo
    process_logo_smart("logo.png", "public/logo-transparent.png")
    # Also overwrite the standard logo if needed, but let's keep a backup
    # process_logo_smart("logo.png", "public/logo.png")
