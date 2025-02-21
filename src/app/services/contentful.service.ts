import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    environment: environment.contentful.environment || 'master',
    accessToken: environment.contentful.accessToken,
  });

  getEntries(contentType: string) {
    return this.client.getEntries({ content_type: contentType });
  }

  getEntryById(entryId: string) {
    return this.client.getEntry(entryId);
  }
}
