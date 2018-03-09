export class ModuleMetaData {

  getMetaData() {
    return {
      declarations: [
        AppComponent,
        DiaryComponent,
        DiaryEntryComponent,
        CreateEntryComponent,
        EntryHeadlineComponent,
        ExportButtonComponent,
        TodoEntryEditableComponent,
        TodoEntryReadmodeComponent,
        CreateTodoComponent,
        DeleteDiaryEntryDialogComponent,
        NewCategoryButtonComponent,
        CreateCategoryDialogComponent,
        CategoryHeaderComponent,
        ManageCategoriesDialogComponent,
        ManageCategoriesButtonComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        TaCustomMaterialModule,
        HttpClientModule
      ],
      providers: [{provide: LOCALE_ID, useValue: 'de'}, TodoService, TodoEntryService, DiaryEntryService, DatabaseService,
        Logger, MatSnackBar, MatDialog, CategoryService]
    }
  }
}
