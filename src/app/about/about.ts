import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

interface User {
  id: string;
  firstName: string;
}

interface ApiResponse {
  users: User[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],                                                                                                                
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About implements OnInit {
  private http = inject(HttpClient);

  usersData: User[] = [];
  api = 'https://dummyjson.com/users';

  ngOnInit(): void {
    this.http.get<ApiResponse>(this.api).subscribe((res) => {
      this.usersData = res.users;
    });
  }
}
