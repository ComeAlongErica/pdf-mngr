export class Document {
  public autoDisposeDocument: boolean = false
  public cacheStatus: DocumentCacheStatus = DocumentCacheStatus.notSynched
  public dataType: DocumentDataType = DocumentDataType.transient
  public readonly isAnyCacheStatusNotSynced: boolean
  public readonly isReadOnly: boolean
  // add loadDocumentOptions
  // add viewOptions
  constructor(public readonly cacheUri: string, public readonly documentId: string) { }
}