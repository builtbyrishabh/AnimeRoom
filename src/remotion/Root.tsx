import "./index.css";
import { Composition, registerRoot } from "remotion";
import type { LiveStateType } from "~/lib/pipeline/helper/createEmptyPreviewState";
import LiveComposition from "./liveComposition";

const emptyCharacter = {
  ready: false,
  name: "",
  title: "",
  imagePrompt: "",
  stats: [],
  skills: [],
  durationFrames: 0,
};

// Studio defaults stay independent of server credentials and remote assets.
const defaultProps: LiveStateType = {
  type: "previewUpdate",
  data: {
    version: 1,
    totalDurationFrames: 0,
    meta: { battleTitle: "", shortSubtitle: "" },
    common: {
      backgroundImageUrl: "",
      announcerImageUrl: "",
      announcerAudioUrl: "",
      skillIcons: [],
    },
    announcer: { ready: false, durationFrames: 0 },
    characterStats: {
      character1: emptyCharacter,
      character2: emptyCharacter,
    },
    rounds: [],
  },
};

// Lambda supplies the saved manifest directly as inputProps.
function ExportComposition(props: LiveStateType) {
  return <LiveComposition props={props} />;
}

function RemotionRoot() {
  return (
    <Composition
      id="AnimeRoom"
      component={ExportComposition}
      defaultProps={defaultProps}
      durationInFrames={1}
      fps={30}
      width={1080}
      height={1920}
      calculateMetadata={({ props }) => ({
        durationInFrames: Math.max(1, props.data.totalDurationFrames),
      })}
    />
  );
}

registerRoot(RemotionRoot);
