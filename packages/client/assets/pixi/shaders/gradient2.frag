varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float timeX;
uniform float timeY;
uniform vec2 mouse;
uniform vec4 outputFrame;
void main() {
    float l;
    vec2 uv;
    vec2 p = vTextureCoord.xy / 0.5;
    uv=p;
    p+=10.;
    l=length(uv);
    uv+=p*(sin(timeX/4.0))*abs(sin(l * 5.));
    vec3 color=vec3(0.2/length(mod(uv,1.)-.5));
	
	gl_FragColor=vec4(0.8/length(mod(uv,1.)-.5), .2/length(mod(uv,1.)-.5), .8/length(mod(uv,1.)-.5),1.);
}
