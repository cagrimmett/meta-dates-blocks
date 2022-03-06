const {
	registerBlockType
} = wp.blocks;

const {
	TextControl
} = wp.components;

const {
    InspectorControls
} = wp.blockEditor;

function formatDate(wpDate) {
    let d = new Date(wpDate);
    let year = d.getFullYear();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let monthNum = d.getMonth();
    let date = d.getDate();
    return date + " " + month[monthNum] + " " + year;
}

registerBlockType( 'meta-dates-block/meta-published-date', {
	title: 'Meta Published Date',
	icon: 'calendar',
	category: 'common',

	edit: function( props ) {
		return (
            <div>
                <div className="meta-dates-block-last-updated">
                    <p>{ props.attributes.label } { formatDate( wp.data.select('core/editor').getEditedPostAttribute('date') ) }</p>
                </div>
                <InspectorControls group="block">
                    <TextControl
                        label="Published date label"
                        value={ props.attributes.label }
                        onChange={ label => props.setAttributes( { label } ) }
                    />
                </InspectorControls>
            </div>
		);
	},
	save: function( props ) {
		return (
			<div className="meta-dates-block-published-date">
				<p>{ props.attributes.label } { formatDate( wp.data.select('core/editor').getEditedPostAttribute('date') ) }</p>
			</div>
		);
	}
} );

registerBlockType( 'meta-dates-block/meta-last-modified', {
	title: 'Meta Last Modified',
	icon: 'calendar',
	category: 'common',

	edit: function( props ) {
		return (
            <div>
                <div className="meta-dates-block-last-modified">
                    <p>{ props.attributes.label } { formatDate( wp.data.select('core/editor').getEditedPostAttribute('modified') ) }</p>
                </div>
                <InspectorControls group="block">
                    <TextControl
                        label="Last modified date label"
                        value={ props.attributes.label }
                        onChange={ label => props.setAttributes( { label } ) }
                    />
                </InspectorControls>
            </div>
		);
	},

	save: function( props ) {
		return (
			<div className="meta-dates-block-modified-date">
				<p>{ props.attributes.label } { formatDate( wp.data.select('core/editor').getEditedPostAttribute('modified') ) }</p>
			</div>
		);
	}
} );