const handleImageBlob = (dataBlob) => {
  const blob = new Blob([dataBlob], { type: "image/png" });
  const objectURL = URL.createObjectURL(blob);
  return objectURL;
};

module.exports = handleImageBlob;
