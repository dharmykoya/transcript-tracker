import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import { sequelize } from "./index"

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string | null;
  email: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'middleName'> { }

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes{
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}


// class User extends Model<UserAttributes, UserCreationAttributes>  implements UserAttributes {
//   public id!: number;
//   public firstName!: string;
//   public lastName!: string;
//   public middleName!: string | null;
//   public email!: string;

//   public createdAt?: Date;
//   public updatedAt?: Date;
// }


const User: ModelDefined<UserAttributes, UserCreationAttributes> = sequelize.define<UserInstance>(
  'User',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.NUMBER
    },
    firstName: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    lastName: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    middleName: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    email: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    password: {
      allowNull: true,
      type: DataTypes.TEXT
    }
  },
  {
    tableName: 'users',
    paranoid: true
  }
)

// const User = sequelize.define<UserInstance>(
//   'User',
//   {
//     id: {
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//       type: DataTypes.NUMBER
//     },
//     firstName: {
//       allowNull: false,
//       type: DataTypes.TEXT
//     },
//     lastName: {
//       allowNull: false,
//       type: DataTypes.TEXT
//     },
//     middleName: {
//       allowNull: true,
//       type: DataTypes.TEXT
//     },
//     email: {
//       allowNull: true,
//       type: DataTypes.TEXT
//     }
//   }
// )


// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   User.init({
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };