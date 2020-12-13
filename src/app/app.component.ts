import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'Music-App';
  current:any = {};
  playstate = false;
  songs = [
    {
      title: 'Wayah',
      artist: 'Amr Diab',
      src: ('./assets/1.mp3')
    },
    {
      title: 'HallaHalla',
      artist: 'Amr Diab',
      src: ('./assets/2.mp3')
    },
    {
      title: 'Rolling in the Deep',
      artist: 'Adele',
      src: ('./assets/3.mp3')
    },
    {
      title: 'Set Fire to the Rain',
      artist: 'Adele',
      src: ('./assets/4.mp3')
    },
    {
      title: 'shape of you',
      artist: 'Ed Sheeran',
      src: ('./assets/5.mp3')
    },
  ];
  index = 0;
  player = new Audio();


  ngOnInit(){
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  }

  play(song) {
    if (typeof song.src != 'undefined') {
      this.current = song;
      this.player.src = this.current.src
    };
    this.player.play();
    this.player.addEventListener('ended', function(){
      this.index++;
      if (this.index > this.songs.length - 1) { this.index = 0 };
      this.current = this.songs[this.index];
      this.play(this.current);
    }.bind(this));
    this.playstate = true;
  };

  plays() {
    this.player.play();
    this.playstate = true;
  };

  pause() {
    this.playstate = false;
    this.player.pause();
  };

  next() {
    this.index++;
    if (this.index > this.songs.length - 1) {
      this.index = 0
    };
    this.current = this.songs[this.index];
    this.play(this.current);
  };

  prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.songs.length - 1
    };
    this.current = this.songs[this.index];
    this.play(this.current);
  }
}
