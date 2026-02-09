module.exports = (sequelize, dataTypes) => {
    
    const posts = sequelize.define("posts", {
        title : { type: dataTypes.STRING, allowNull: false, },
        postText: { type: dataTypes.STRING, allowNull: false, },
        username: { type: dataTypes.STRING, allowNull: false, },
    });

    return posts;
}