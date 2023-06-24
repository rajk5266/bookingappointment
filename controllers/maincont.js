const path = require('path')

const User = require('../models/user');
const { response } = require('express');

exports.showform = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  async function getUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.error('Error retrieving users:', error);
      throw error;
    }
  }

};

exports.getUser = async (req, res) => {
  try {
    const users = await User.findAll();
    //   console.log(users)
    res.send(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};

exports.submitform = async (req, res) => {
  console.log(req.body)
  // console.log("above req.body")
  // const data = [{ name: req.body.name, email: req.body.email, phoneno: req.body.phoneno}]
  const { name, email, phoneno } = req.body;
  await User.create({
    name: name,
    email: email,
    phoneno: phoneno
  })
    .then(response => {
      console.log(response)
      const data = {
        id: response.dataValues.id,
        name: name,
        email: email,
        phoneno: phoneno
      };
      res.send(data);
      // res.redirect('/');
    })
    .catch(error => {
      console.error('Error creating user:', error);
      // res.json('email already exist')
      res.status(500).json({ message: 'Internal server error' });
      // res.redirect('/');
    });
}

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.destroy({
      where: {
        id: userId
      }
    });

    if (deletedUser) {
      res.send('User deleted successfully');
    } else {
      res.send('User not found');
    }
  } catch (error) {

    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateUser = async (req, res) => {
  const userId = req.params.id; 
  const { name, email, phoneno } = req.body;

  try {
    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.update({ name, email, phoneno });

    res.json({ name, email, phoneno } );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
