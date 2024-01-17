import { Component } from '@angular/core';
declare var Gantt: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tasks = [
    {
      start: '2018-10-01',
      end: '2018-10-08',
      name: 'Redesign website',
      id: "Task 0",
      progress: 20
    },
    {
      start: '2018-10-03',
      end: '2018-10-06',
      name: 'Write new content',
      id: "Task 1",
      progress: 5,
      dependencies: 'Task 0'
    },
    {
      start: '2018-10-04',
      end: '2018-10-08',
      name: 'Apply new styles',
      id: "Task 2",
      progress: 10,
      dependencies: 'Task 1'
    },
    {
      start: '2018-10-08',
      end: '2018-10-09',
      name: 'Review',
      id: "Task 3",
      progress: 5,
      dependencies: 'Task 2'
    },
    {
      start: '2018-10-08',
      end: '2018-10-10',
      name: 'Deploy',
      id: "Task 4",
      progress: 0,
      dependencies: 'Task 2'
    },
    {
      start: '2018-10-11',
      end: '2018-10-11',
      name: 'Go Live!',
      id: "Task 5",
      progress: 0,
      dependencies: 'Task 4',
      custom_class: 'bar-milestone'
    },
    {
      start: '2018-10-01',
      end: '2018-10-08',
      name: 'Redesign website',
      id: "Task 0",
      progress: 20
    },
    {
      start: '2018-10-03',
      end: '2018-10-06',
      name: 'Write new content',
      id: "Task 1",
      progress: 5,
      dependencies: 'Task 0'
    },
    {
      start: '2018-10-04',
      end: '2018-10-08',
      name: 'Apply new styles',
      id: "Task 2",
      progress: 10,
      dependencies: 'Task 1'
    },
    {
      start: '2018-10-08',
      end: '2018-10-09',
      name: 'Review',
      id: "Task 3",
      progress: 5,
      dependencies: 'Task 2'
    },
    {
      start: '2018-10-08',
      end: '2018-10-10',
      name: 'Deploy',
      id: "Task 4",
      progress: 0,
      dependencies: 'Task 2'
    },
    {
      start: '2018-10-11',
      end: '2018-10-11',
      name: 'Go Live!',
      id: "Task 5",
      progress: 0,
      dependencies: 'Task 4',
      custom_class: 'bar-milestone'
    }
  ]
  title = 'jslibrary';
  gantt!: any;


  ngOnInit() {
    this.gantt = new Gantt("#gantt", this.tasks,{
      on_click:(task: any) => {
        this.onclick(task);
      },
      on_date_change: (task: any, start: any, end: any) => {
        this.onDateChange(task, start, end);
      },
      on_progress_change: (task: any, progress: any) => {
        this.onProgressChange(task, progress);
      },
      on_view_change: (mode: any) => {
        this.onViewChange(mode);
      },
    });

  }
  onViewChange(mode: any) {
    console.log(mode)
  }
  onProgressChange(task: any, progress: any) {
    console.log(task,progress)
  }
  onDateChange(task: any, start: any, end: any) {
    console.log(task,start,end)
  }


  onclick(e: any) {
    console.log(e);

  }
}
