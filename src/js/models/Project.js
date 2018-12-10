var Project = function() {
  this.images = []
}

Project.prototype = {

  setTitle: function(title) {
    this.title = title
  },

  setDescription: function(description) {
    this.description = description
  },

  addImage: function(imageLink) {
    var nextIndex = this.images.length
    this.images[nextIndex] = imageLink
  },

  setCategory: function(category) {
    this.category = category
  },

  setSubCategory: function(subcategory) {
    this.subcategory = subcategory
  }

}

export default Project