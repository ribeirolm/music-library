var library = {
    tracks: { t01: { id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three" },
              t02: { id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"},
              t03: { id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"}
            },
    playlists: { p01: { id: "p01",
                        name: "Coding Music",
                        tracks: ["t01", "t02"]
                      },
                 p02: { id: "p02",
                        name: "Other Playlist",
                        tracks: ["t03"]
                      }
               },
  
    printPlaylists: function () {
      for (var playlistNumber in this.playlists){
           var playlistName = this.playlists[playlistNumber].name;
           var trackNumber = this.playlists[playlistNumber].tracks.length;
          console.log(playlistNumber + ": " + playlistName + " - " + trackNumber + " tracks");
      }
    },
  
    printTracks: function () {
      for (var trackNumber in this.tracks){
           var trackName = this.tracks[trackNumber].name;
           var artistName = this.tracks[trackNumber].artist;
           var albumName = this.tracks[trackNumber].album;
          console.log(trackNumber + ": " + trackName + " by " + artistName + " (" + albumName + ")");
      }
    },
  
    printPlaylist: function (playlistId) {
      var playlistPrint = this.playlists[playlistId].id + ": " + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks";
      console.log(playlistPrint);
      var track = this.playlists[playlistId].tracks;
        function trackList (){
          var playlistTracks = "";
          for (var i = 0; i < track.length; i++) {
            playlistTracks = track[i];
            // console.log(playlistTracks);
            // console.log(track[i])
             console.log(track[i] + ": " + this.tracks[playlistTracks].name + " by " + this.tracks[playlistTracks].artist + " (" + this.tracks[playlistTracks].album + ")");
          }
        }
        trackList();
    },
  
    addTrackToPlaylist: function (trackId, playlistId) {
      this.playlists[playlistId].tracks.push(trackId);
      console.log(this.playlists[playlistId].tracks)
    },
  
    uid: function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },
  
    addTrack: function (name, artist, album) {
      var uniqueObject = uid({});
      this.tracks[uniqueObject] = {id: uniqueObject, name: name, artist: artist, album: album};
      console.log(this.tracks);
    },
  
    addPlaylist: function (name) {
      var uniqueObject = uid({});
      this.playlists[uniqueObject] = {id: uniqueObject, name: name, tracks: []};
      console.log(this.playlists);
    }
  }
  
  console.log(library)
  
  // FUNCTIONS TO IMPLEMENT:
  
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  
  
  
  
  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  
  
  
  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  
  
  //printPlaylist("p01");
  
  
  // adds an existing track to an existing playlist
  
  //addTrackToPlaylist("t12", "p01")
  
  
  // generates a unique id
  // (use this for addTrack and addPlaylist)
  
  
  //uid()
  
  
  // adds a track to the this
  
  
  //addTrack("Take On Me", "a-ha", "Hunting High And Low")
  
  // adds a playlist to the this
  
  
  //addPlaylist("Fun Remix")
  
  
  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri")
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  
  var printSearchResults = function(query) {
  
  }