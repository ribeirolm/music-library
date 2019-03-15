class protoLibrary {
  constructor(name, creator){
    super();
    this.state = {
      name: name,
      creator: creator,
      playlists: [],
    }
  }
  addPlaylist(playlist){
    this.state.playlists.push(playlist)
  }
}

class protoPlaylist {
  constructor(name){
    super();
    this.state = {
      name: name,
      tracks: [],
    }
    addTrack(tracks){
      this.state.tracks.push(tracks)
    } 
  }

  overallRating = () => {
    let tracks = this.state.tracks;
    let totalRating = 0;
    tracks.forEach((track)=> totalRating += track.rating);
    totalRating = Math.round(totalRating / tracks.length);
    return totalRating;
  }

  totalDuration = (n) => {
    let time = 0;
    this.state.tracks.forEach((track)=> time += track.length) 
    return time;
  }
}

class protoTrack {
  constructor (title, rating, length) {
    super();
    this.state = {
      title:title,
      rating:rating,
      length: length,
    }
  }
}


// function makeLibrary(name, creator){
//   let library = Object.create(protoLibrary);
//   library.name = name;
//   library.creator = creator;
//   return library;
// }

// function makePlaylist(name){
//   let playlist = Object.create(protoPlaylist);
//   playlist.name = name;
//   return playlist;
// }

// function makeTrack(title, rating, length){
//   let track = Object.create(protoTrack);
//   track.title = title;
//   track.rating = rating;
//   track.length = length;
//   return track;
// }



