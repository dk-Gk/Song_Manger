const SongModel = require("../models/song");
const getSongs = async (req, res) => {
    try {
      const songs = await SongModel.find({ user: req.user.id });
      res.json(songs);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  }

const createSong = async (req, res) => {
    try {
      const { title, artist, album, genre, songUrl } = req.body;
      
      const newSong = new SongModel({
        title,
        artist,
        album,
        genre,
        songUrl,
        user: req.user.id
      });
  
      const song = await newSong.save();
      res.status(201).json(song);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  }

const updateSong = async (req, res) => {
  const { title, artist, album, genre, songUrl } = req.body;
  const songFields = { title, artist, album, genre, songUrl };
  const songid = req.params.songid

  try {
    let song = await SongModel.findById(songid);

    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }

    // Check if the authenticated user owns the song
    if (song.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    song = await SongModel.findByIdAndUpdate(songid, { $set: songFields }, { new: true });

    res.json(song);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteSong = async (req, res) => {
  const songid = req.params.songid
  try {
    const song = await SongModel.findById(songid);

    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }

    if (song.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await song.remove();

    res.json({ message: 'Song deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

  module.exports = {
    getSongs,
    createSong,
    updateSong,
    deleteSong
  };