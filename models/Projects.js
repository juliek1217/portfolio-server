module.exports = (sequelize, DataTypes) => {
  const Projects = sequelize.define("Projects", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tech: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image0: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Projects.associate = (models) => {
    Projects.hasMany(models.CommentsProjects, {
      onDelete: "cascade"
    });

    Projects.hasMany(models.LikesProjects, {
      onDelete: "cascade"
    });
  };
  return Projects;
};
