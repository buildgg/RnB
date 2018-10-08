export class ManageModalBox {
  visible: boolean;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
