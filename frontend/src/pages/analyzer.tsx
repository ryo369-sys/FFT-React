import { SoundButton } from '../components/ui/read_file';
import { FileUpload } from '../components/ui/read-sound';

const Analyzer = () => {
  return (
    <div>
      <h1>analyzer</h1>
      <FileUpload/>
      <SoundButton/>
    </div>
  );
};

export default Analyzer