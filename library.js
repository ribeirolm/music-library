class protoLibrary {
  constructor(name, creator){
    super();
    this.state = {
      name: name,
      creator: creator,
      playlists: [],
    }
  }
}

class protoPlaylist {
  constructor(name){
    super();
    this.state = {
      name: name,
      tracks: [],
    }
  }

  overallRating = (this.state.tracks) => {
    let tracks = this.state.tracks;
    let result = null;
    for (var i = 0; i < tracks.length; i++) {
      result += (tracks[i] / tracks.length);
    }
    return result;
  }

  totalDuration = (n) => {
    let sum = 0;
    for (let i = n; i >= 1; i--){
      sum += 1;
    }
    return sum;
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



