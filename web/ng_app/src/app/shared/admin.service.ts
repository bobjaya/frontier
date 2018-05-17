import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

@Injectable()
export class AdminService {
    constructor(private http: HttpClient) { }

    private companies = [];
    private hiringManagers = [];
    private jobs = [];

    companies$: BehaviorSubject<Object> = new BehaviorSubject<Object>(this.companies);
    hiringManagers$: BehaviorSubject<Object> = new BehaviorSubject<Object>(this.hiringManagers);
    jobs$: BehaviorSubject<Object> = new BehaviorSubject<Object>(this.jobs);

    getCompanies(): any {
        // return this.http.get("/admin/companies");
        // mocked data
        // return Observable.of([{
        //     id: 'A1b345',
        //     name: 'Bank of America',
        //     contact: 'John Doe',
        //     email: 'omarkiy@bofa.com',
        //     address: '42nd street 6th ave',
        //     phone: 7706537399,
        //     logo: 'assets/img/admin/logo-1.png',
        //     hiring_manager: 3
        // }, {
        //     id: 'as756g',
        //     name: 'Morgan Stanley',
        //     contact: 'Jessica Mez',
        //     email: 'JM@morganstan.com',
        //     address: '123 5th ave',
        //     phone: null,
        //     logo: 'assets/img/admin/logo-2.png',
        //     hiring_manager: 3
        // }]);
        return Observable.of(this.companies);
    }

    saveCompany(data) {
        // return this.http.post("/admin/companies");
        // mocking data to save new company
        data.id = 'A1b345';
        data.logo = 'assets/img/admin/logo-1.png';
        data.hiring_manager = 0;
        this.companies.push(data);
        console.log(this.companies);
        this.companies$.next(this.companies);
    }

    getHiringManagers(): any {
        // return this.http.get("/admin/managers");
        // return [{
        //     id: 'HM1230',
        //     company: 'Bank of America',
        //     name: 'Omar Kiy',
        //     email: 'omarkiy@bofa.com',
        //     address: '42nd street 6th ave',
        //     phone: 7706537399,
        //     open_jobs: 1,
        //     status: 'Invite sent',
        //     logo: 'assets/img/admin/t-1.png'
        // }, {
        //     id: 'HM1231',
        //     company: 'Bank of America',
        //     name: 'Elizabeth',
        //     email: 'Eliz@bofa.com',
        //     address: '42nd street 6th ave',
        //     phone: 7706537399,
        //     open_jobs: 1,
        //     status: 'Active',
        //     logo: 'assets/img/admin/t-2.png'
        // }, {
        //     id: 'HM1232',
        //     company: 'Bank of America',
        //     name: 'Yi',
        //     email: 'Yi@bofa.com',
        //     address1: '42nd street 6th ave',
        //     phone: 7706537399,
        //     open_jobs: 1,
        //     status: 'Active',
        //     logo: 'assets/img/admin/t-2.png'
        // }];
        return Observable.of(this.hiringManagers);
    }

    saveHiringManager(data) {
        // return this.http.post("/admin/companies");
        // mocking data to save new company
        data.id = 'A1b345';
        data.logo = 'assets/img/admin/t-2';
        data.open_jobs = 0;
        data.status = 'open';
        this.hiringManagers.push(data);
        this.hiringManagers$.next(this.hiringManagers);
    }

    getHiringEmployees(): any {
        // return this.http.get("/admin/employees");
        return [{
            id: 'bo546v',
            title: 'Financial Analyst',
            type: 'full time',
            level: 'Entry Level',
            company: 'Bank Of America',
            hm_manager: 'Omar Kiyani',
            location: 'NY,Ny',
            status: 'Open',
        }];
    }

    getJobs(): any {
        // return this.http.get("/admin/employees");
        // return [{
        //     id: 'bo546v',
        //     type: 'Financial Analyst',
        //     company: 'Bank Of America',
        //     hm_manager: 'Omar Kiyani',
        //     status: 'Open',
        // }, {
        //     id: 'bo546v',
        //     type: 'Financial Analyst',
        //     company: 'Bank Of America',
        //     hm_manager: 'YI',
        //     status: 'Open',
        // }, {
        //     id: 'bo546v',
        //     type: 'Financial Analyst',
        //     company: 'Bank Of America',
        //     hm_manager: 'Elizabeth',
        //     status: 'Closed',
        // }];
        return Observable.of(this.jobs);
    }

    saveJob(data) {
        // return this.http.post("/admin/job");
        // mocking data to save new job
        data.id = 'A1b345';
        data.status = 'open';
        data.location = 'san francisco';
        this.jobs.push(data);
        this.jobs$.next(this.jobs);
    }

}
