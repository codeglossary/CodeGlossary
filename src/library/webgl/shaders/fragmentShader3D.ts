const fragmentShader: string =
`precision mediump float;
varying vec3 fragColor;
void main()
{
	gl_FragColor = vec4(fragColor, 1.0);
}`

export default fragmentShader