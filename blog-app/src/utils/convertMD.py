import json

'''
 Usage:
   1. Modify the wanted .md file name
   2. Modify the blog meta data 
   3. run with Python3 convertMD.py
   4. Done, check you new blog in the app
'''


##configure the blog meta-data
# read the md content into oneline string
file = r"../content/py_collections.md" #TODO: 1. Modify file name
with open(file,'r', encoding='utf-8') as f:
    output = f.read()
    content = rf'{output}'

#Blog meta data. TODO: 2. modify this everytime
new_blog = {
  "id":3, #int
  "title":"Python Collection Module", #string
  "author":"Linchen Chen", #string
  "date":"Jan 24 2021", #string
  "tag":["clean code"],  #array
  "content":content #string
}

# print(content, end="")


#read the old database
data_path = r"../cardNote.json"
with open(data_path, 'r') as f:
  data = json.loads(f.read())

# update database
blogs = data['blogs']
existed = False
for index, blog in enumerate(blogs):
  #update existed blog
  if new_blog["id"] == blog["id"]:
    blogs[index] = new_blog
    existed = True
    break

if existed:
  data['blogs'] = blogs
else:
  #if it's new blog
  data['blogs'].append(new_blog)

with open(data_path, 'w') as f:
  json.dump(data, f, indent=4)