import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { data } from './types';
import { aboutData } from './variant';
import { NgFor } from '@angular/common';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  image: string;
}

interface ApiResponse {
  users: User[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About implements OnInit {
  private http = inject(HttpClient);

  usersData: User[] = [];
  api = 'https://dummyjson.com/users';

  ngOnInit(): void {
    this.http.get<ApiResponse>(this.api).subscribe((res) => {
      this.usersData = res.users.slice(0, 5);
    });
  }

  getaboutData: data = aboutData;
  onButtonCLick() {
    alert("Subscribed Successfully");
  }

}
