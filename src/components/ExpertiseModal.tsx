import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

type ExpertiseDetail = {
  modalTitle: string;
  paragraphs: string[];
  keyServices: string[];
  technologies?: string;
};

type ExpertiseModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  detail: ExpertiseDetail | null;
};

export function ExpertiseModal({ open, onOpenChange, detail }: ExpertiseModalProps) {
  if (!detail) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-lg border-gray-200 bg-white p-8 shadow-xl sm:p-10">
        <DialogHeader>
          <DialogTitle className="pr-8 text-3xl tracking-tight text-black">
            {detail.modalTitle}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {detail.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="space-y-3">
            <h4 className="text-sm tracking-wide text-black">Key Services</h4>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              {detail.keyServices.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {detail.technologies ? (
            <div className="space-y-2">
              <h4 className="text-sm tracking-wide text-black">Technologies</h4>
              <p className="text-gray-600 leading-relaxed">{detail.technologies}</p>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
