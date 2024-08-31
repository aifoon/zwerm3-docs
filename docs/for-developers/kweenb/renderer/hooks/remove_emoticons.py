import os
import re

def remove_emojis(text):
    # Define a regex pattern to match emojis and other Unicode symbols
    emoji_pattern = re.compile(
        "["
        u"\U0001F600-\U0001F64F"  # emoticons
        u"\U0001F300-\U0001F5FF"  # symbols & pictographs
        u"\U0001F680-\U0001F6FF"  # transport & map symbols
        u"\U0001F700-\U0001F77F"  # alchemical symbols
        u"\U0001F780-\U0001F7FF"  # Geometric Shapes Extended
        u"\U0001F800-\U0001F8FF"  # Supplemental Arrows-C
        u"\U0001F900-\U0001F9FF"  # Supplemental Symbols and Pictographs
        u"\U0001FA00-\U0001FA6F"  # Chess Symbols
        u"\U0001FA70-\U0001FAFF"  # Symbols and Pictographs Extended-A
        u"\U00002702-\U000027B0"  # Dingbats
        u"\U000024C2-\U0001F251"
        "]+", flags=re.UNICODE)

    # Remove emojis from the text
    cleaned_text = re.sub(emoji_pattern, '', text)
    return cleaned_text

def clean_markdown_files(directory):
    # Iterate over all files in the directory
    for filename in os.listdir(directory):
        # Process only markdown files
        if filename.endswith(".md"):
            filepath = os.path.join(directory, filename)
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()

            # Remove emojis from the content
            cleaned_content = remove_emojis(content)

            # Write the cleaned content back to the file
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(cleaned_content)
            print(f"Processed file: {filename}")

if __name__ == "__main__":
    # Set the directory containing markdown files
    directory = '.'  # Replace with your folder path
    clean_markdown_files(directory)
