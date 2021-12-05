import { Map } from "immutable";
import { AppState } from "./State";

interface SongsDetailsProps {
  state: AppState;
  songNo: number;
}

export interface Song {
  id: number;
  songTitle: string;
  notes: string;
  artistName: string;
  releaseYear: number;
  awardsWon: string;
}

export function SongsDetails(props: SongsDetailsProps) {
  const { state, songNo } = props;
  const songs: Array<Song> = state
    .get("songs")
    ?.toArray()
    ?.map((m: Map<any, any>) => m.toObject());
  const song = songs?.[Number(songNo)];

  return (
    <div
      className="absolute right-0 bottom-0 top-0 flex flex-column items-center justify-center gold bg-bluish-black"
      style={{ left: "16rem" }}
    >
      <div className="flex flex-column mw6 lh-copy mb4 df">
        <div className="fw6 f3 white self-center mb3">Details</div>
        <div>
          <span className="detail-label">Song Title: </span>
          <span className="white i-ns f6-ns">{song?.songTitle}</span>
        </div>
        <div>
          <span className="detail-label">Artist Name: </span>
          <span className="white i-ns f6-ns">{song?.artistName}</span>
        </div>
        <div>
          <span className="detail-label">Release Year: </span>
          <span className="white i-ns f6-ns">{song?.releaseYear}</span>
        </div>
        <div>
          <span className="detail-label">Awards Won: </span>
          <span className="white i-ns f6-ns">{song?.awardsWon}</span>
        </div>
      </div>
    </div>
  );
}
