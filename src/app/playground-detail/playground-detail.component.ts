import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-playground-detail',
  templateUrl: './playground-detail.component.html'
})
export class PlaygroundDetailComponent implements OnInit {

  params: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      const params = this.activatedRoute.snapshot.params;
      this.params = params;

      const data = this.activatedRoute.snapshot.data;
      console.log(data);
  }
}
