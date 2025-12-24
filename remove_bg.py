from PIL import Image
import numpy as np

def process_logo(input_path, output_path, threshold=50):
    print(f"Processing {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)

    # Calculate brightness
    r, g, b, a = data.T
    brightness = (r.astype(int) + g.astype(int) + b.astype(int)) / 3

    # Create mask for dark pixels (background)
    # We want to remove pixels that are dark (low brightness)
    # But we want to keep the glowing parts.
    mask = brightness < threshold

    # Set alpha to 0 for dark pixels
    data[..., 3][mask.T] = 0

    # Create new image from modified data
    new_img = Image.fromarray(data)

    # Crop the image to the bounding box of non-zero alpha
    bbox = new_img.getbbox()
    if bbox:
        new_img = new_img.crop(bbox)
        print(f"Cropped image to {bbox}")
    else:
        print("Warning: Image is completely transparent!")

    new_img.save(output_path)
    print(f"Saved processed logo to {output_path}")

if __name__ == "__main__":
    process_logo("public/logo.png", "public/logo-processed.png")
