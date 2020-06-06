import internal from 'stream';
import * as apid from '../../../../api';

export interface StreamResponse {
    streamId: apid.StreamId;
    stream: internal.Readable;
}

export default interface IStreamApiModel {
    startLiveM2TsStream(option: apid.LiveStreamOption): Promise<StreamResponse>;
    startLiveWebmStream(option: apid.LiveStreamOption): Promise<StreamResponse>;
    startMp4Stream(option: apid.LiveStreamOption): Promise<StreamResponse>;
    startLiveHLSStream(option: apid.LiveStreamOption): Promise<apid.StreamId>;
    startRecordedWebMStream(option: apid.RecordedStreanOption): Promise<StreamResponse>;
    startRecordedMp4Stream(option: apid.RecordedStreanOption): Promise<StreamResponse>;
    stop(streamId: apid.StreamId): Promise<void>;
    stopAll(): Promise<void>;
    getStreamInfos(): Promise<apid.StreamInfo>;
}
