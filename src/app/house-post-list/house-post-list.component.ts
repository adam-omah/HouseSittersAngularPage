import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousepostDataService } from '../service/housepost-data.service';

@Component({
  selector: 'app-house-post-list',
  templateUrl: './house-post-list.component.html',
  styleUrl: './house-post-list.component.css',
  providers: [HousepostDataService]
})
export class HousePostListComponent {

  constructor(private housePostService: HousepostDataService){}

  housePosts!: HousePost[];

  private getHousePosts(): void {
    this.housePostService.getHousePosts()
    .then(foundHousePosts => {
      this.housePosts = foundHousePosts;
    });
  }

  ngOnInit() {
    this.getHousePosts();
  }

}

export class HousePost {
  
  _id!: string;
  title!: string;
  days!: number;
  startDate!: Date;
  imageURL!: string;
  address!: string;
  description!: string;
  dogs!: string[];
  cats!: string[];
  others!: string[];
  applicants!: number;
  dayPosted!:Date;

}
