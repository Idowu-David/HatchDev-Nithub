class SongNode {
  next: SongNode | null = null;
  title: string;
  artist: string;
  duration: number;
  public readonly id: number = 0;
  prev: SongNode | null = null;
  private playCount: number = 0;
  private isFavorite: boolean = false;

  constructor(title: string, artist: string, duration: number) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.id++;
  }
}

class SongList {
  numberOfSongs: number = 0;
  head: SongNode | null = null;
  tail: SongNode | null = null;

  /**
   * Adds a new song to the playlist
   * @param title The title of the song
   * @param artist The artist of the song
   * @param duration The duration of the song
   * @returns The ID of the song
   */
  add(title: string, artist: string, duration: number): number {
    const song = new SongNode(title, artist, duration);
    if (!this.head) {
      this.head = this.tail = song;
      return song.id;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = song;
    song.prev = current;
    this.tail = song;

    return song.id;
  }

  /**
   * Searches for a song in the linked list using the title or the artist and displays the details of the song
   * @param title Song title
   * @param artist Song artist
   */
  search(title?: string, artist?: string) {
    if (!title && !artist) {
      console.log("Enter song Title or Artist");
      return;
    }
    const matches: SongNode[] = [];
    let song = this.head;

    const titleLower = title?.toLowerCase();
    const artistLower = artist?.toLowerCase();

    while (song) {
      const titleMatch = titleLower
        ? song.title.toLowerCase().includes(titleLower)
        : false;
      const artistMatch = artistLower
        ? song.artist.toLowerCase().includes(artistLower)
        : false;

      if (titleMatch || artistMatch) {
        matches.push(song);
      }
      song = song.next;
    }

    if (matches.length === 0) {
      console.log("No match found");
      return;
    }
    console.log(SongList.Header());
    console.log("-".repeat(65));

    for (const song of matches) {
      console.log(
        String(song.id).padEnd(4) +
          song.artist.padEnd(20) +
          song.title.padEnd(30) +
          `${song.duration}s`.padEnd(9)
      );
    }
  }

  /**
   * Formats the header for the display of the songs.
   * @returns
   */
  static Header(): string {
    return (
      "ID".padEnd(5) +
      "Artist".padEnd(20) +
      "Title".padEnd(29) +
      "Duration".padEnd(9)
    );
  }
}

const song = new SongList();
song.add("The Great Revivalist", "Dunsin Oyekan", 324);
song.add("More Than Anything", "Dunsin Oyekan", 228);
song.add("Baba We Thank You O", "Nathaniel Bassey", 290);
song.add("Jesus You are Everything", "Theophilus Sunday", 389);

song.search("Jesus")

