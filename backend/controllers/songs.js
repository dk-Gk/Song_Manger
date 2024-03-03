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
const getAllSongs = async (req, res) => {
    try {
      const songs = await SongModel.find();
      res.json(songs);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  }

const createSong = async (req, res) => {
    try {
      console.log("from create", req.body)
      const { title, artist, album, genre } = req.body;
      
      const newSong = new SongModel({
        title,
        artist,
        album,
        genre,
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
  const { title, artist, album, genre} = req.body;
  const songFields = { title, artist, album, genre };
  const songid = req.params.songid
  
  try {
    let song = await SongModel.findById(songid);

    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }

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
  console.log("user id = ",req.user.id);
  try {
    const song = await SongModel.findById(songid);

    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }

    if (song.user?.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await SongModel.deleteOne({_id: songid})

    res.json({ message: 'Song deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getStatistics = async (req, res) => {
  try {
      const totalSongs = await SongModel.countDocuments();
      const totalArtists = await SongModel.distinct('artist').countDocuments();
      const totalAlbums = await SongModel.aggregate([
        { $match: { album: { $ne: '' } } },
        { $group: { _id: null, count: { $sum: 1 } } }
    ]);

    const totalAlbumsCount = totalAlbums.length > 0 ? totalAlbums[0].count : 0;
      const totalGenres = await SongModel.distinct('genre').countDocuments();

      const genreCounts = await SongModel.aggregate([
          { $group: { _id: '$genre', count: { $sum: 1 } } }
      ]);

      const artistSongCounts = await SongModel.aggregate([
          { $group: { _id: '$artist', count: { $sum: 1 } } }
      ]);

      const artistAlbumCounts = await SongModel.aggregate([
          { $group: { _id: { artist: '$artist', album: '$album' }, count: { $sum: 1 } } }
      ]);

      const albumSongCounts = await SongModel.aggregate([
          { $group: { _id: '$album', count: { $sum: 1 } } }
      ]);

      res.json({
          totalSongs,
          totalArtists,
          totalAlbums: totalAlbumsCount,
          totalGenres,
          genreCounts,
          artistSongCounts,
          artistAlbumCounts,
          albumSongCounts
      });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
  }
}; 
  module.exports = {
    getSongs,
    getAllSongs,
    createSong,
    updateSong,
    deleteSong,
    getStatistics,
  };