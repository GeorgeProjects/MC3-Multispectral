/**
 * Created by liqiusheng@b.360.cn on 2017/7/6.
 */
let config = {
  SHORT_NAME: 'ImageTagged',
  REGION_SHAPE: {
    RECT: 'rect',
    CIRCLE: 'circle',
    ELLIPSE: 'ellipse',
    POLYGON: 'polygon',
    POINT: 'point'
  },
  REGION_EDGE_TOL: 5,
  THETA_TOL: Math.PI / 18,
  POLYGON_RESIZE_VERTEX_OFFSET: 100,
  CANVAS_DEFAULT_ZOOM_LEVEL_INDEX: 3,
  REGION_POINT_RADIUS: 3,
  CANVAS_ZOOM_LEVELS: [ 0.25, 0.5, 0.75, 1.0, 1.5, 2.0, 2.5, 3.0, 4, 5 ],
  THEME_REGION_BOUNDARY_WIDTH: 4,
  THEME_BOUNDARY_LINE_COLOR: '#1a1a1a',
  THEME_BOUNDARY_FILL_COLOR: '#aaeeff',
  THEME_SEL_REGION_FILL_COLOR: '#808080',
  THEME_SEL_REGION_FILL_BOUNDARY_COLOR: '#000000',
  THEME_SEL_REGION_OPACITY: 0.5,
  THEME_MESSAGE_TIMEOUT_MS: 2500,
  THEME_ATTRIBUTE_VALUE_FONT: '10pt Sans',
  THEME_CONTROL_POINT_COLOR: '#ff0000',
  CSV_SEP: ',',
  CSV_QUOTE_CHAR: '"',
  CSV_KEYVAL_SEP: ':',
  IMPORT_CSV_COMMENT_CHAR: '#'
}

export default config
