module.exports = (sequelize, DataTypes) => {
    const CommentsProjects = sequelize.define("CommentsProjects", {
        commentBody: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return CommentsProjects;
};
