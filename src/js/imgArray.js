function createImages(){
    let images = [];

    for(let i = 1; i <= 10; i++){
        images[i] = new Image()
        images[i].src = `../assets/image_${i}.jpeg`;
    }

    return images;
}


module.exports = createImages