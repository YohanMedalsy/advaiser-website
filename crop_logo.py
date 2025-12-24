from PIL import Image

def crop_logo(input_path, output_path):
    print(f"Processing {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    
    # getbbox() returns the bounding box of the non-zero regions
    bbox = img.getbbox()
    
    if bbox:
        print(f"Original Size: {img.size}")
        print(f"Cropping to bounding box: {bbox}")
        cropped_img = img.crop(bbox)
        print(f"New Size: {cropped_img.size}")
        cropped_img.save(output_path)
        print(f"Saved cropped logo to {output_path}")
    else:
        print("Warning: Image is completely transparent!")

if __name__ == "__main__":
    crop_logo("public/logo-processed.png", "public/logo-processed.png")
