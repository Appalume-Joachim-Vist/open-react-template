import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Om Oss',
    paragraph: 'Vi är två studenter på Karolinska Institutet som brinner för teknologi och allt det kan göra för världen'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" id='about-us'/>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  VD
                  </div>
                <h3 className="mt-0 mb-12">
                  Joachim Vist
                  </h3>
                <p className="m-0">
                  Joachim har tidigare erfarenhet av att jobba med automtion pch ERP system då han innan detta jobbade för en av världens störtsa Human capital management (HCM) företag. Där skrev han program som optimerade arbetsflödet
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Joachim_profile.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} 
                  className='Profile-image'/>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  CTO
                  </div>
                <h3 className="mt-0 mb-12">
                  Iurii Petrov
                  </h3>
                <p className="m-0">
                  Iurii är civilingengör och snart fil dr i bioinformatik. Han har innan detta driftat ett datacenter med över 300 virtuella maskiner. Han lär för närvarande ut kurser i programmering samt artificiell intelligens på Karolinska Institutet
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill Profile-image'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Iurii_profile.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} 
                  className='Profile-image'/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;