import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PoServicesModule } from '../../services/services.module';
import { PoButtonModule } from '../po-button';
import { PoButtonGroupModule } from '../po-button-group';
import { PoCalendarModule } from '../po-calendar/po-calendar.module';
import { PoContainerModule } from '../po-container';
import { PoIconModule } from '../po-icon/po-icon.module';
import { PoLoadingModule } from '../po-loading';
import { PoModalModule } from '../po-modal/po-modal.module';
import { PoTableModule } from '../po-table/po-table.module';
import { PoTooltipModule } from './../../directives/po-tooltip/po-tooltip.module';
import { PoDisclaimerGroupModule } from './../po-disclaimer-group/po-disclaimer-group.module';
import { PoDisclaimerModule } from './../po-disclaimer/po-disclaimer.module';
import { PoProgressModule } from './../po-progress/po-progress.module';
import { PoCheckboxGroupModule } from './po-checkbox-group/po-checkbox-group.module';
import { PoCheckboxComponent } from './po-checkbox/po-checkbox.component';
import { PoCleanModule } from './po-clean/po-clean.module';
import { PoComboOptionTemplateDirective } from './po-combo/po-combo-option-template/po-combo-option-template.directive';
import { PoComboComponent } from './po-combo/po-combo.component';
import { PoDatepickerRangeComponent } from './po-datepicker-range/po-datepicker-range.component';
import { PoDatepickerModule } from './po-datepicker/po-datepicker.module';
import { PoDecimalComponent } from './po-decimal/po-decimal.component';
import { PoEmailComponent } from './po-email/po-email.component';
import { PoFieldContainerModule } from './po-field-container/po-field-container.module';
import { PoInputComponent } from './po-input/po-input.component';
import { PoLoginComponent } from './po-login/po-login.component';
import { PoLookupModule } from './po-lookup/po-lookup.module';
import { PoMultiselectDropdownComponent } from './po-multiselect/po-multiselect-dropdown/po-multiselect-dropdown.component';
import { PoMultiselectItemComponent } from './po-multiselect/po-multiselect-item/po-multiselect-item.component';
import { PoMultiselectSearchComponent } from './po-multiselect/po-multiselect-search/po-multiselect-search.component';
import { PoMultiselectComponent } from './po-multiselect/po-multiselect.component';
import { PoNumberComponent } from './po-number/po-number.component';
import { PoPasswordComponent } from './po-password/po-password.component';
import { PoRadioGroupComponent } from './po-radio-group/po-radio-group.component';
import { PoRichTextBodyComponent } from './po-rich-text/po-rich-text-body/po-rich-text-body.component';
import { PoRichTextImageModalComponent } from './po-rich-text/po-rich-text-image-modal/po-rich-text-image-modal.component';
import { PoRichTextLinkModalComponent } from './po-rich-text/po-rich-text-link-modal/po-rich-text-link-modal.component';
import { PoRichTextToolbarComponent } from './po-rich-text/po-rich-text-toolbar/po-rich-text-toolbar.component';
import { PoRichTextComponent } from './po-rich-text/po-rich-text.component';
import { PoSelectOptionTemplateDirective } from './po-select/po-select-option-template/po-select-option-template.directive';
import { PoSelectComponent } from './po-select/po-select.component';
import { PoSwitchComponent } from './po-switch/po-switch.component';
import { PoTextareaComponent } from './po-textarea/po-textarea.component';
import { PoUploadDragDropAreaOverlayComponent } from './po-upload/po-upload-drag-drop/po-upload-drag-drop-area-overlay/po-upload-drag-drop-area-overlay.component';
import { PoUploadDragDropAreaComponent } from './po-upload/po-upload-drag-drop/po-upload-drag-drop-area/po-upload-drag-drop-area.component';
import { PoUploadDragDropComponent } from './po-upload/po-upload-drag-drop/po-upload-drag-drop.component';
import { PoUploadDragDropDirective } from './po-upload/po-upload-drag-drop/po-upload-drag-drop.directive';
import { PoUploadFileRestrictionsComponent } from './po-upload/po-upload-file-restrictions/po-upload-file-restrictions.component';
import { PoUploadComponent } from './po-upload/po-upload.component';
import { PoUrlComponent } from './po-url/po-url.component';

/**
 * @description
 *
 * Módulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
 * po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
 * e po-url.
 *
 * > Não esqueça de importar o módulo `FormsModule` para usar os componentes de formulários e caso esteja trabalhando com
 * > formulários reativos, importe o módulo `ReactiveFormsModule`, ambos nativos do Angular.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PoButtonGroupModule,
    PoButtonModule,
    PoCleanModule,
    PoCalendarModule,
    PoCheckboxGroupModule,
    PoContainerModule,
    PoDatepickerModule,
    PoDisclaimerGroupModule,
    PoDisclaimerModule,
    PoFieldContainerModule,
    PoLoadingModule,
    PoModalModule,
    PoProgressModule,
    PoServicesModule,
    PoTableModule,
    PoTooltipModule,
    PoIconModule,
    PoLookupModule
  ],
  exports: [
    PoCheckboxGroupModule,
    PoCleanModule,
    PoDatepickerModule,
    PoCheckboxComponent,
    PoComboComponent,
    PoComboOptionTemplateDirective,
    PoDecimalComponent,
    PoDatepickerRangeComponent,
    PoEmailComponent,
    PoFieldContainerModule,
    PoInputComponent,
    PoLoginComponent,
    PoMultiselectComponent,
    PoNumberComponent,
    PoPasswordComponent,
    PoRadioGroupComponent,
    PoRichTextComponent,
    PoSelectComponent,
    PoSelectOptionTemplateDirective,
    PoSwitchComponent,
    PoTextareaComponent,
    PoUploadComponent,
    PoUrlComponent,
    PoLookupModule
  ],
  declarations: [
    PoCheckboxComponent,
    PoComboComponent,
    PoComboOptionTemplateDirective,
    PoDecimalComponent,
    PoDatepickerRangeComponent,
    PoEmailComponent,
    PoInputComponent,
    PoLoginComponent,
    PoMultiselectComponent,
    PoMultiselectDropdownComponent,
    PoMultiselectItemComponent,
    PoMultiselectSearchComponent,
    PoNumberComponent,
    PoPasswordComponent,
    PoRadioGroupComponent,
    PoRichTextBodyComponent,
    PoRichTextComponent,
    PoRichTextImageModalComponent,
    PoRichTextLinkModalComponent,
    PoRichTextToolbarComponent,
    PoSelectComponent,
    PoSelectOptionTemplateDirective,
    PoSwitchComponent,
    PoTextareaComponent,
    PoUploadComponent,
    PoUploadDragDropComponent,
    PoUploadDragDropDirective,
    PoUploadDragDropAreaOverlayComponent,
    PoUploadDragDropAreaComponent,
    PoUploadFileRestrictionsComponent,
    PoUrlComponent
  ],
  providers: []
})
export class PoFieldModule {}
