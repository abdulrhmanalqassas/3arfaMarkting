"use client";

import Modal from "@/shared/Modal";

const embedUrl = "https://www.youtube.com/embed/mVSU0pJAYUI?mute=0&autoplay=1";

export default function VideoModal({ onClose }) {
  return (
    <Modal className="modal-video" label="Arafa Agency video" onClose={onClose}>
      <div className="modal-video-body">
        <div className="modal-video-inner">
          <div className="modal-video-movie-wrap">
            <form method="dialog">
              <button type="submit" className="modal-video-close-btn" aria-label="Close video" />
            </form>
            <iframe
              title="Arafa Agency video"
              src={embedUrl}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
