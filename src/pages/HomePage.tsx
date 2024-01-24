import Dialog from "@/components/Dialog"

export default function HomePage() {
  return (
    <div
      style={{ margin: "auto", position: "absolute", top: "50%", left: "50%" }}
    >
      <Dialog>
        <Dialog.Trigger>
          <button>Dialog Open</button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Dialog</Dialog.Title>
            <Dialog.Description>
              description dialog! click outside to close
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Dialog.Close>Close</Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </div>
  )
}
