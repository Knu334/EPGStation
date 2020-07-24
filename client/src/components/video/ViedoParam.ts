import * as apid from '../../../../api';

export type VideoType = 'Normal' | 'RecordedStreaming' | 'LiveHLS' | 'RecordedHLS';

export interface BaseVideoParam {
    type: VideoType;
}

export interface NormalVideoParam extends BaseVideoParam {
    type: 'Normal';
    src: string;
}

export interface RecordedStreamingParam extends BaseVideoParam {
    type: 'RecordedStreaming';
    videoFileId: apid.VideoFileId;
    mode: number;
}

export interface LiveHLSParam extends BaseVideoParam {
    type: 'LiveHLS';
    channelId: apid.ChannelId;
    mode: number;
}

export interface RecordedHLSParam extends BaseVideoParam {
    type: 'RecordedHLS';
    videoFileId: apid.VideoFileId;
    mode: number;
}