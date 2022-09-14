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

const FeaturesSplit_clients = ({
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
    title: 'Våra kunder',
    paragraph: 'Här kan ni se några av våra tidigare uppdrag'
  };

  return (
    <section
      {...props}
      className={outerClasses}
      id="Clients"
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" id='clients'/>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Progressive Web App
                  </div>
                <h3 className="mt-0 mb-12">
                  <a href="https://www.byggbilen.se/" target="_blank" rel="noopener noreferrer">Byggbilen</a>
                  </h3>
                <p className="m-0">
                  {/* Förtydliga, att vi har utvecklat appen etc. lägg till, teknologier som använts */}
                  Byggbilen har som mål att effektivisera byggbranschen genom gröna och smidiga transporter. För att göra detta behövs en app där man som entreprenör kan beställa byggmaterial från en stor mängd leverantörer. Detta kräver att appen måste kunna hämta data från ca 50 olika leverantörer. Vår app klarar av detta och just nu har Byggbilen ca 570 byggare som indirekt använder appen dagligen
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/bb-logo.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} 
                  className='Profile-image'/>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Säkerhetsgenomgång med åtgärder
                  </div>
                <h3 className="mt-0 mb-12">
                  <a href="https://www.medicinskaforeningen.se/" target="_blank" rel="noopener noreferrer">Medicinska Föreningen i Stockholm</a>
                  </h3>
                <p className="m-0">
                  Medicinska Föreningen kontaktade oss eftersom en misstänkt cyberattack. Vid vår säkerhetsgenomgång av deras system upptäcktes flera potentiella säkerhetsrisker. Tillsammans med representanter från Medicinska Föreningen åtgärdade bristerna.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill Profile-image'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/mf-logo.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} 
                  className='Profile-image-MF'/>
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Digitalisering av blanketter
                  </div>
                <h3 className="mt-0 mb-12">
                  <a href="https://www.medicinskaforeningen.se/" target="_blank" rel="noopener noreferrer">Medicinska Föreningen i Stockholm</a>
                  </h3>
                <p className="m-0">
                  Medicinska Föreningen har länge haft manuella blanketter som fylls i av studenterna. Vid ett universitet med ca 6000 studerande blir detta snabbt väldigt tidskrävande. Detta löste vi genom att skapa ett automatiserat flöde som bland annat tar hjälp av AI teknik och digitala signaturer för att minska arbetsbördan signifikant.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill Profile-image'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/mf-logo.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} 
                  className='Profile-image-MF'/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit_clients.propTypes = propTypes;
FeaturesSplit_clients.defaultProps = defaultProps;

export default FeaturesSplit_clients;