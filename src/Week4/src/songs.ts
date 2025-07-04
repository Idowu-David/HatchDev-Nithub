// class SongNode {
//   next: SongNode | null = null;
//   title: string;
//   artist: string;
//   duration: number;
//   id: number = 0;
//   static idCounter: number = 0;
//   prev: SongNode | null = null;
//   playCount: number = 0;

//   constructor(title: string, artist: string, duration: number) {
//     this.title = title;
//     this.artist = artist;
//     this.duration = duration;
//     this.id = ++SongNode.idCounter;
//   }

//   play(list: SongList) {
//     console.log(
//       `Now playing: "${this.title}" by ${this.artist} [${this.duration}s]`
//     );
//     list.currently = this;
//   }
// }

// class SongList {
//   numberOfSongs: number = 0;
//   head: SongNode | null = null;
//   tail: SongNode | null = null;
//   isShuffle: boolean = false;
//   currently: SongNode | null = null;
//   isLoop: boolean = false;

//   /**
//    * Adds a new song to the playlist
//    * @param title The title of the song
//    * @param artist The artist of the song
//    * @param duration The duration of the song
//    * @returns The ID of the song
//    */
//   add(title: string, artist: string, duration: number): number {
//     const song = new SongNode(title, artist, duration);
//     if (!this.head) {
//       this.head = this.tail = song;
//       this.numberOfSongs++;
//       return song.id;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = song;
//     song.prev = current;
//     this.tail = song;
//     this.numberOfSongs++;
//     return song.id;
//   }

//   /**
//    * Searches for a song in the linked list using the title or the artist and displays the details of the song
//    * @param title Song title
//    * @param artist Song artist
//    */
//   search(title?: string, artist?: string) {
//     if (!title && !artist) {
//       console.log("Enter song Title or Artist");
//       return;
//     }
//     const matches: SongNode[] = [];
//     let song = this.head;

//     const titleLower = title?.toLowerCase();
//     const artistLower = artist?.toLowerCase();

//     while (song) {
//       const titleMatch = titleLower
//         ? song.title.toLowerCase().includes(titleLower)
//         : false;
//       const artistMatch = artistLower
//         ? song.artist.toLowerCase().includes(artistLower)
//         : false;

//       if (titleMatch || artistMatch) {
//         matches.push(song);
//       }
//       song = song.next;
//     }

//     if (matches.length === 0) {
//       console.log("No match found");
//       return;
//     }
//     console.log(`${matches.length} match(es) found:\n`);
//     console.log(SongList.Header());
//     console.log("-".repeat(65));

//     for (const song of matches) {
//       console.log(
//         String(song.id).padEnd(4) +
//           song.artist.padEnd(20) +
//           song.title.padEnd(30) +
//           `${song.duration}s`.padEnd(9)
//       );
//     }
//   }

//   playById(id: number) {
//     let song = this.head;
//     while (song) {
//       if (song.id === id) {
//         song.play(this);
//         this.currently = song;
//         return;
//       }
//       song = song.next;
//     }
//     console.log("Not found");
//   }

//   nowPlaying() {
//     if (this.currently) {
//       console.log(
//         `Currently playing: "${this.currently.title}" by ${this.currently.artist} [${this.currently.duration}s]`
//       );
//     } else {
//       console.log("No song is currently playing");
//     }
//   }

//   delete(id: number) {
//     if (!this.head) return;

//     let song: SongNode | null = this.head;
//     let node: SongNode;

//     while (song) {
//       if (song.id === id) {
//         node = song;
//         if (song.prev === null) {
//           this.head = song.next;
//           if (this.head) this.head.prev = null;
//         } else if (song.next === null) {
//           song.prev.next = song.prev = null;
//           song = null;
//         } else {
//           song.prev.next = song.next;
//           song.next.prev = song.prev;
//           song.next = song.prev = song = null;
//         }
//         console.log(
//           `Deleted: "${node.title}" by ${node.artist} [${node.duration}s]`
//         );
//         this.numberOfSongs--;
//         return;
//       }
//       song = song.next;
//     }
//     console.log(`Song not found`);
//   }

//   /**
//    * Lists all the songs in the playlist.
//    *
//    */
//   playlist() {
//     if (!this.head) {
//       console.log("No head");
//       return;
//     }
//     let song: SongNode | null = this.head;

//     console.log(`Number of Songs: ${SongNode.idCounter}`);
//     console.log(SongList.Header());
//     console.log("-".repeat(65));
//     while (song) {
//       console.log(
//         String(song.id).padEnd(4) +
//           song.artist.padEnd(20) +
//           song.title.padEnd(30) +
//           `${song.duration}s`.padEnd(9)
//       );
//       song = song.next;
//     }
//   }

//   /**
//    * Plays the playlist in a loop
//    * @param times number of times to loop
//    */
//   loop(times: number) {
//     if (!this.head) return;
//     if (this.tail) {
//       this.tail.next = this.head;
//       this.head.prev = this.tail;
//     }
//     let current: SongNode | null = this.head;
//     for (let i = 0; i < times; i++) {
//       let count = 0;
//       while (count < this.numberOfSongs && current) {
//         current.play(this);
//         current = current.next;
//         count++;
//       }
//     }
//     this.isLoop = true;
//   }

//   /**
//    * Turns off the loop property
//    */
//   loopOff() {
//     if (!this.head || !this.tail) return;

//     this.head.prev = null;
//     this.tail.next = null;
//     this.isLoop = false;
//   }

//   /**
//    * Toggles the shuffle property
//    */
//   shuffle(): void {
//     this.isShuffle = !this.isShuffle;
//   }

//   /**
//    * Plays the next song in the list
//    * checks if shuffle is on, plays randomly
//    */
//   next() {
//     if (!this.head || !this.tail) return;

//     if (this.isShuffle) {
//       let random = Math.floor(Math.random() * this.numberOfSongs);
//       let current: SongNode | null = this.head;
//       for (let i = 0; i < random && current; i++) {
//         current = current.next;
//       }

//       if (current) {
//         current.play(this);
//         this.currently = current;
//       }
//     } else {
//       let nextSong = this.currently?.next;

//       if (!nextSong && this.isLoop) {
//         nextSong = this.head;
//       }

//       if (nextSong) {
//         nextSong.play(this);
//         this.currently = nextSong;
//       } else {
//         console.log("End of playlist");
//       }
//     }
//   }

//   prev() {}

//   reversePlay() {
//     if (!this.head || !this.tail) return;

//     let song: SongNode | null = this.tail;

//     while (song) {
//       song.play(this);
//       song = song.prev;
//     }
//   }

//   /**
//    * Formats the header for the display of the songs.
//    * @returns)
//    */
//   static Header(): string {
//     return (
//       "ID".padEnd(5) +
//       "Artist".padEnd(20) +
//       "Title".padEnd(29) +
//       "Duration".padEnd(9)
//     );
//   }
// }

// const song = new SongList();
// song.add("Baba", "Dunsin Oyekan", 234);
// song.add("Halleluyah", "McDowell", 329);
// song.add("Give Thanks", "Don Moen", 231);

// song.playlist();