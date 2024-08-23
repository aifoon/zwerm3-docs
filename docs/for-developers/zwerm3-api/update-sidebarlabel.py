import os
import re

def update_mdx_file(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    # Regular expressions to match title and sidebar_label
    title_match = re.search(r'title:\s*"(.*?)"', content)
    sidebar_label_match = re.search(r'sidebar_label:\s*"(.*?)"', content)

    if title_match and sidebar_label_match:
        title = title_match.group(1)

        # Replace the sidebar_label with the title
        updated_content = re.sub(r'sidebar_label:\s*"(.*?)"', f'sidebar_label: "{title}"', content)

        # Write the updated content back to the file
        with open(file_path, 'w') as file:
            file.write(updated_content)

        print(f"Updated: {file_path}")
    else:
        print(f"Skipped (title or sidebar_label not found): {file_path}")

def update_all_mdx_files_in_folder(root_folder):
    # Recursively search for all .mdx files
    for foldername, subfolders, filenames in os.walk(root_folder):
        for filename in filenames:
            if filename.endswith('.mdx'):
                file_path = os.path.join(foldername, filename)
                update_mdx_file(file_path)

# Path to the root folder where .mdx files are located
root_folder = '.'

# Call the function to update all .mdx files in the folder and subfolders
update_all_mdx_files_in_folder(root_folder)
