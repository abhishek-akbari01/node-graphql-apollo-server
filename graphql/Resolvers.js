const User = require("../models/User");

const resolvers = {
    Query: {
        getUser: async ({ id }) => {
          try {
            const user = await User.findById(id);
            return user;
          } catch (err) {
            throw new Error("Error retrieving user");
          }
        },
        getUsers: async () => {
          try {
            const users = await User.find();
            return users;
          } catch (err) {
            throw new Error("Error retrieving users");
          }
        },
    },
    Mutation: {
        createUser: async (_, { name, email, password }) => {
          try {
            console.log("name--", name)
            const user = new User({ name, email, password });
            await user.save();
            return user;
          } catch (err) {
            console.log("error", err)
            throw new Error("Error creating user");
          }
        },
        updateUser: async ({ id, name, email, password }) => {
          try {
            const user = await User.findByIdAndUpdate(
              id,
              { name, email, password },
              { new: true }
            );
            return user;
          } catch (err) {
            throw new Error("Error updating user");
          }
        },
        deleteUser: async ({ id }) => {
          try {
            const user = await User.findByIdAndRemove(id);
            return user;
          } catch (err) {
            throw new Error("Error deleting user");
          }
        },
    }
};

module.exports = resolvers;