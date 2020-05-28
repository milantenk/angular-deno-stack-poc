import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageDto } from '../../../../common/message-dto'


@Injectable()
export class ExampleService {

    constructor(private http: HttpClient) { }

    getExampleMessage(): Observable<MessageDto> {
        return this.http.get<MessageDto>('/api/message');
    }
}