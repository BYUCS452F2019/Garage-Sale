animalSchema.statics.findByName = function(name) {
  return this.find({ name: new RegExp(name, 'i') });
};

async function x() {
  var Animal = mongoose.model('Animal', animalSchema);
  const fido = await Animal.findByName('fido')
}