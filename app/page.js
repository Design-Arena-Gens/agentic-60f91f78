'use client';

import { useState } from 'react';

export default function Home() {
  const [furnitureType, setFurnitureType] = useState('sofa');
  const [style, setStyle] = useState('modern');
  const [material, setMaterial] = useState('leather');
  const [targetAudience, setTargetAudience] = useState('homeowners');
  const [generatedAd, setGeneratedAd] = useState('');
  const [loading, setLoading] = useState(false);

  const generateAd = async () => {
    setLoading(true);

    const adTemplates = {
      sofa: {
        modern: {
          leather: {
            homeowners: {
              headline: "Transform Your Living Space with Luxury",
              body: "Experience unparalleled comfort with our premium leather sofa collection. Crafted with genuine Italian leather and contemporary design, this statement piece brings sophistication to any modern home. Features include reinforced hardwood frame, high-density foam cushioning, and timeless elegance that lasts generations.",
              cta: "Visit our showroom today and enjoy 20% off your first purchase!"
            },
            businesses: {
              headline: "Professional Elegance for Your Office",
              body: "Impress clients and elevate your workspace with our executive leather sofa collection. Designed for commercial durability while maintaining refined aesthetics, these pieces offer superior comfort during long business meetings. Commercial-grade construction ensures years of reliable service.",
              cta: "Request a corporate catalog and bulk pricing today!"
            }
          },
          fabric: {
            homeowners: {
              headline: "Modern Comfort Meets Contemporary Style",
              body: "Discover our stunning collection of modern fabric sofas, perfect for the style-conscious homeowner. Premium upholstery fabrics in trending colors complement any décor while providing exceptional comfort. Stain-resistant technology makes maintenance effortless for busy families.",
              cta: "Shop now and get free delivery on orders over $999!"
            },
            businesses: {
              headline: "Versatile Seating Solutions for Modern Offices",
              body: "Create inspiring collaborative spaces with our modern fabric sofa collection. Designed for high-traffic commercial environments, these pieces combine durability with contemporary aesthetics. Multiple configuration options available to fit any office layout.",
              cta: "Schedule a consultation with our commercial design team!"
            }
          }
        },
        traditional: {
          leather: {
            homeowners: {
              headline: "Classic Elegance Never Goes Out of Style",
              body: "Embrace timeless sophistication with our traditional leather sofa collection. Hand-crafted with premium leather and classic design elements including rolled arms and button tufting, these pieces become cherished family heirlooms. Rich, warm tones create an inviting atmosphere in any traditional home.",
              cta: "Visit us this weekend for exclusive showroom savings!"
            },
            businesses: {
              headline: "Distinguished Seating for Prestigious Spaces",
              body: "Make a lasting impression with our traditional leather sofas, perfect for executive offices, law firms, and upscale waiting areas. Exquisite craftsmanship and refined details communicate professionalism and success. Built to maintain appearance and comfort for decades.",
              cta: "Contact our B2B specialists for custom solutions!"
            }
          },
          fabric: {
            homeowners: {
              headline: "Timeless Beauty for Your Traditional Home",
              body: "Celebrate classic design with our traditional fabric sofa collection. Featuring elegant patterns, decorative wood accents, and sumptuous fabrics, these pieces create warm, inviting spaces. Perfect for formal living rooms or cozy family gathering areas.",
              cta: "Financing available - bring home your dream sofa today!"
            },
            businesses: {
              headline: "Refined Comfort for Professional Settings",
              body: "Create distinguished waiting areas and reception spaces with our traditional fabric sofas. Classic styling projects credibility while comfortable seating keeps clients at ease. Durable commercial-grade fabrics withstand years of daily use.",
              cta: "Explore our commercial collection and volume discounts!"
            }
          }
        }
      },
      chair: {
        modern: {
          leather: {
            homeowners: {
              headline: "Iconic Design Meets Ultimate Comfort",
              body: "Elevate your interior with our modern leather chair collection. Sleek lines and premium leather create stunning focal points in any room. From ergonomic office chairs to statement accent pieces, each design combines form and function beautifully.",
              cta: "Shop the collection - Free shipping on all orders!"
            },
            businesses: {
              headline: "Executive Seating That Commands Respect",
              body: "Outfit your office with modern leather chairs that reflect your professional standards. Ergonomically designed for all-day comfort with contemporary aesthetics that impress. Adjustable features and commercial-grade construction ensure long-term performance.",
              cta: "Request a quote for your office furniture needs!"
            }
          },
          fabric: {
            homeowners: {
              headline: "Stylish Comfort for Every Room",
              body: "Add personality to your space with our modern fabric chair collection. Vibrant colors, bold patterns, and innovative designs make decorating fun. Lightweight yet sturdy construction allows easy rearrangement to refresh your look anytime.",
              cta: "New arrivals weekly - Shop trending styles now!"
            },
            businesses: {
              headline: "Flexible Seating for Dynamic Workspaces",
              body: "Furnish modern offices with our versatile fabric chair collection. Stackable and mobile options facilitate collaborative spaces while maintaining professional appearance. Easy-clean fabrics and robust frames handle demanding commercial use.",
              cta: "Download our commercial furniture catalog today!"
            }
          }
        },
        traditional: {
          leather: {
            homeowners: {
              headline: "Heritage Craftsmanship in Every Detail",
              body: "Own a piece of furniture history with our traditional leather chairs. Hand-finished leather develops beautiful patina over time while classic designs remain forever stylish. Perfect for libraries, studies, or formal dining rooms.",
              cta: "Limited quantities available - Reserve yours today!"
            },
            businesses: {
              headline: "Prestigious Seating for Discerning Professionals",
              body: "Furnish executive offices with traditional leather chairs that exude authority and sophistication. Hand-crafted details and premium materials reflect your commitment to quality. Built to last and impress for years to come.",
              cta: "Schedule a private showroom viewing for your firm!"
            }
          },
          fabric: {
            homeowners: {
              headline: "Classic Comfort for Traditional Homes",
              body: "Complete your traditional décor with our elegant fabric chair collection. Featuring timeless patterns, wooden details, and superior cushioning, these pieces provide both beauty and comfort. Heirloom quality construction ensures decades of enjoyment.",
              cta: "Visit our showroom for personalized design consultation!"
            },
            businesses: {
              headline: "Professional Elegance for Client-Facing Spaces",
              body: "Create welcoming reception areas with our traditional fabric chairs. Classic styling puts clients at ease while durable construction withstands heavy use. Available in sophisticated neutrals and rich accent colors.",
              cta: "Order samples and discuss bulk pricing with our team!"
            }
          }
        }
      },
      table: {
        modern: {
          wood: {
            homeowners: {
              headline: "Where Modern Design Meets Natural Beauty",
              body: "Transform your dining experience with our modern wood table collection. Clean lines and natural wood grains create stunning centerpieces for contemporary homes. Sustainably sourced materials and expert craftsmanship ensure each table is both beautiful and eco-conscious.",
              cta: "Explore our collection - Interest-free financing available!"
            },
            businesses: {
              headline: "Conference Tables That Inspire Collaboration",
              body: "Equip your meeting rooms with modern wood tables that combine professional aesthetics with practical functionality. Durable finishes resist scratches and stains while integrated cable management keeps spaces organized. Various sizes available for any room configuration.",
              cta: "Contact us for custom commercial solutions!"
            }
          },
          metal: {
            homeowners: {
              headline: "Industrial Chic for Contemporary Living",
              body: "Make a bold statement with our modern metal table collection. Sleek designs featuring glass tops and metal bases create airy, sophisticated looks perfect for urban lofts and minimalist spaces. Easy to maintain and incredibly durable.",
              cta: "Free design consultation with purchase over $1,500!"
            },
            businesses: {
              headline: "Modern Workstations for Progressive Offices",
              body: "Outfit collaborative spaces with our modern metal tables. Lightweight yet sturdy construction allows flexible space planning while contemporary design energizes work environments. Resistant to wear and easy to clean for high-traffic areas.",
              cta: "View our complete commercial furniture solutions!"
            }
          }
        },
        traditional: {
          wood: {
            homeowners: {
              headline: "Family Traditions Begin Here",
              body: "Create lasting memories around our traditional wood dining tables. Hand-crafted from premium hardwoods with rich finishes and ornate details, these tables become family treasures passed through generations. Extend options accommodate guests for special occasions.",
              cta: "Visit our showroom and receive a free matching bench!"
            },
            businesses: {
              headline: "Impressive Boardroom Furnishings",
              body: "Command attention with traditional wood conference tables that communicate success and stability. Exquisite woodwork and substantial construction create the perfect setting for important decisions. Custom sizing and finishes available for your unique space.",
              cta: "Request a consultation with our corporate specialists!"
            }
          },
          metal: {
            homeowners: {
              headline: "Vintage Charm with Modern Durability",
              body: "Blend old and new with our traditional metal table collection. Featuring antique-inspired bases and solid wood tops, these pieces bring character to any traditional home. Built to last while requiring minimal maintenance.",
              cta: "Shop now and enjoy white glove delivery service!"
            },
            businesses: {
              headline: "Distinctive Tables for Boutique Settings",
              body: "Furnish cafes, boutique offices, and hospitality spaces with our traditional metal tables. Unique designs create memorable atmospheres while commercial-grade construction ensures long service life. Mix-and-match options for customized looks.",
              cta: "Explore wholesale pricing for multiple units!"
            }
          }
        }
      },
      bed: {
        modern: {
          wood: {
            homeowners: {
              headline: "Sleep in Modern Luxury",
              body: "Experience the perfect blend of style and comfort with our modern wood bed collection. Minimalist designs with quality craftsmanship create serene bedroom retreats. Low-profile frames and clean lines complement contemporary décor while solid construction ensures years of restful sleep.",
              cta: "Complete your bedroom - 15% off matching nightstands!"
            },
            businesses: {
              headline: "Hotel-Quality Beds for Guest Accommodations",
              body: "Outfit guest rooms with our modern wood beds designed for commercial hospitality. Durable construction withstands frequent use while contemporary styling appeals to diverse guests. Easy assembly and maintenance for property management teams.",
              cta: "Request hospitality catalog and bulk discount pricing!"
            }
          },
          metal: {
            homeowners: {
              headline: "Contemporary Style Meets Comfort",
              body: "Transform your bedroom with our modern metal bed collection. Sleek frames in matte finishes create striking focal points without overwhelming your space. Strong steel construction provides stable support while maintaining an airy, open feel.",
              cta: "Free mattress buying guide with every bed purchase!"
            },
            businesses: {
              headline: "Durable Beds for Residential Facilities",
              body: "Furnish dorms, extended stay facilities, and staff quarters with our modern metal beds. Heavy-duty frames handle daily use while simple designs fit various room sizes. Quick assembly and easy cleaning for facility managers.",
              cta: "Contact our institutional sales team for volume pricing!"
            }
          }
        },
        traditional: {
          wood: {
            homeowners: {
              headline: "Classic Elegance for Restful Nights",
              body: "Indulge in timeless luxury with our traditional wood bed collection. Ornate headboards, rich finishes, and premium hardwood construction create master bedroom sanctuaries. Choose from sleigh beds, four-poster designs, and panel beds that reflect your refined taste.",
              cta: "Financing available - Sweet dreams start today!"
            },
            businesses: {
              headline: "Luxurious Beds for Premium Hospitality",
              body: "Elevate guest experiences with our traditional wood beds perfect for boutique hotels and upscale B&Bs. Elegant designs create memorable impressions while durable construction ensures guest satisfaction. Custom finishes available to match your property's aesthetic.",
              cta: "Schedule a consultation with our hospitality designers!"
            }
          },
          metal: {
            homeowners: {
              headline: "Vintage Romance Meets Modern Comfort",
              body: "Create a romantic bedroom retreat with our traditional metal bed collection. Featuring intricate scrollwork and antique-inspired finishes, these beds bring Old World charm to your home. Solid construction ensures stability and longevity.",
              cta: "Visit our showroom for exclusive in-store promotions!"
            },
            businesses: {
              headline: "Distinctive Beds for Themed Accommodations",
              body: "Furnish boutique hotels and themed guest rooms with our traditional metal beds. Unique designs create Instagram-worthy spaces that guests love. Durable construction and classic styling maintain appeal season after season.",
              cta: "Explore our commercial collections and design services!"
            }
          }
        }
      },
      desk: {
        modern: {
          wood: {
            homeowners: {
              headline: "Work from Home in Style",
              body: "Boost productivity with our modern wood desk collection. Clean lines and functional designs create inspiring home office spaces. Built-in storage solutions and cable management keep workspaces organized while beautiful wood finishes add warmth to any room.",
              cta: "Shop now - Free ergonomic chair consultation included!"
            },
            businesses: {
              headline: "Professional Workstations for Productive Teams",
              body: "Equip your office with modern wood desks that blend aesthetics and functionality. Spacious work surfaces, integrated storage, and durable construction support employee productivity. Modular options allow flexible office configurations.",
              cta: "Request a quote for complete office furniture packages!"
            }
          },
          metal: {
            homeowners: {
              headline: "Industrial Strength Meets Home Office Style",
              body: "Create the ultimate workspace with our modern metal desk collection. Sturdy steel frames and spacious tops handle multiple monitors and equipment with ease. Open designs maximize legroom while industrial aesthetics add urban sophistication.",
              cta: "New arrivals - Shop the latest workspace trends!"
            },
            businesses: {
              headline: "Flexible Desks for Dynamic Work Environments",
              body: "Furnish modern offices with our versatile metal desk collection. Adjustable heights, modular configurations, and clean designs support collaborative workstyles. Durable construction and easy maintenance perfect for busy workplaces.",
              cta: "Download our workspace planning guide and catalog!"
            }
          }
        },
        traditional: {
          wood: {
            homeowners: {
              headline: "Executive Home Office Elegance",
              body: "Command respect with our traditional wood desk collection. Rich hardwoods, ornate details, and ample storage create distinguished home office spaces. Premium craftsmanship and timeless designs reflect your professional success.",
              cta: "Visit us for personalized office furniture consultation!"
            },
            businesses: {
              headline: "Impressive Desks for Executive Leadership",
              body: "Outfit executive suites with traditional wood desks that project authority and success. Handcrafted details, luxurious finishes, and substantial construction create commanding office presence. Custom sizing and features available.",
              cta: "Schedule a private viewing with our executive furniture specialist!"
            }
          },
          metal: {
            homeowners: {
              headline: "Vintage Character for Your Home Office",
              body: "Add personality to your workspace with our traditional metal desk collection. Combining antique-inspired metal frames with wood surfaces, these desks offer unique style and practical functionality. Perfect for creative professionals and home offices.",
              cta: "Shop online or visit our showroom for the full collection!"
            },
            businesses: {
              headline: "Unique Workstations for Creative Offices",
              body: "Furnish design studios, creative agencies, and boutique offices with our traditional metal desks. Distinctive styling inspires creativity while sturdy construction supports daily work demands. Create workspaces that reflect your brand personality.",
              cta: "Explore custom options and commercial pricing today!"
            }
          }
        }
      },
      cabinet: {
        modern: {
          wood: {
            homeowners: {
              headline: "Organize Your Space with Modern Elegance",
              body: "Maximize storage without sacrificing style with our modern wood cabinet collection. Sleek designs with soft-close drawers and adjustable shelving keep belongings organized and accessible. Natural wood finishes bring warmth while clean lines maintain contemporary aesthetics.",
              cta: "Shop now and receive free professional assembly!"
            },
            businesses: {
              headline: "Professional Storage Solutions for Modern Offices",
              body: "Keep workplaces organized with our modern wood cabinet collection. Lockable options secure sensitive documents while open shelving displays awards and materials. Modular designs allow customized storage systems for any office layout.",
              cta: "Request a space planning consultation and catalog!"
            }
          },
          metal: {
            homeowners: {
              headline: "Industrial Storage for Contemporary Homes",
              body: "Add functional art to your space with our modern metal cabinet collection. Glass doors showcase collections while solid panels conceal clutter. Durable powder-coated finishes resist wear while maintaining sleek appearance for years.",
              cta: "Free design service with purchases over $2,000!"
            },
            businesses: {
              headline: "Secure Storage for Commercial Spaces",
              body: "Protect valuable equipment and documents with our modern metal cabinets. Heavy-duty construction, reinforced locks, and fire-resistant options provide peace of mind. Available in various sizes for diverse commercial storage needs.",
              cta: "Contact our commercial team for security features and pricing!"
            }
          }
        },
        traditional: {
          wood: {
            homeowners: {
              headline: "Heirloom Storage for Treasured Belongings",
              body: "Store your valuables in furniture worthy of them with our traditional wood cabinet collection. Hand-crafted with ornate details and premium hardwoods, these pieces become room centerpieces. Display china, books, or collections behind glass doors with interior lighting.",
              cta: "Limited edition pieces available - Visit showroom today!"
            },
            businesses: {
              headline: "Distinguished Storage for Professional Settings",
              body: "Enhance office prestige with traditional wood cabinets for executive suites and formal spaces. Elegant designs provide secure storage while projecting success and stability. Custom millwork available for unique requirements.",
              cta: "Schedule consultation with our corporate design specialists!"
            }
          },
          metal: {
            homeowners: {
              headline: "Vintage Charm Meets Practical Storage",
              body: "Combine nostalgia and function with our traditional metal cabinet collection. Antique-inspired hardware and finishes add character while adjustable shelves provide modern versatility. Perfect for kitchens, mudrooms, or craft rooms seeking vintage appeal.",
              cta: "Shop our curated collection - New pieces added weekly!"
            },
            businesses: {
              headline: "Distinctive Storage for Specialty Retail",
              body: "Create unique retail environments with our traditional metal cabinets. Vintage aesthetics attract customers while durable construction provides reliable display and storage. Ideal for boutiques, cafes, and specialty shops.",
              cta: "Explore wholesale options for retail businesses!"
            }
          }
        }
      }
    };

    const materialMap = {
      sofa: { modern: ['leather', 'fabric'], traditional: ['leather', 'fabric'] },
      chair: { modern: ['leather', 'fabric'], traditional: ['leather', 'fabric'] },
      table: { modern: ['wood', 'metal'], traditional: ['wood', 'metal'] },
      bed: { modern: ['wood', 'metal'], traditional: ['wood', 'metal'] },
      desk: { modern: ['wood', 'metal'], traditional: ['wood', 'metal'] },
      cabinet: { modern: ['wood', 'metal'], traditional: ['wood', 'metal'] }
    };

    const effectiveMaterial = materialMap[furnitureType][style].includes(material)
      ? material
      : materialMap[furnitureType][style][0];

    const ad = adTemplates[furnitureType][style][effectiveMaterial][targetAudience];

    setTimeout(() => {
      setGeneratedAd(`<div class="ad-preview">
  <h1 class="ad-headline">${ad.headline}</h1>
  <div class="ad-body">${ad.body}</div>
  <div class="ad-cta">${ad.cta}</div>
</div>`);
      setLoading(false);
    }, 800);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedAd);
    alert('Ad copy copied to clipboard!');
  };

  const getMaterialOptions = () => {
    if (['sofa', 'chair'].includes(furnitureType)) {
      return ['leather', 'fabric'];
    } else {
      return ['wood', 'metal'];
    }
  };

  return (
    <main className="container">
      <div className="header">
        <h1>🪑 Professional Furniture Ad Generator</h1>
        <p>Create compelling advertisements for your furniture business</p>
      </div>

      <div className="form-container">
        <div className="form-group">
          <label>Furniture Type</label>
          <select value={furnitureType} onChange={(e) => {
            setFurnitureType(e.target.value);
            const newMaterialOptions = e.target.value === 'sofa' || e.target.value === 'chair'
              ? ['leather', 'fabric']
              : ['wood', 'metal'];
            if (!newMaterialOptions.includes(material)) {
              setMaterial(newMaterialOptions[0]);
            }
          }}>
            <option value="sofa">Sofa</option>
            <option value="chair">Chair</option>
            <option value="table">Table</option>
            <option value="bed">Bed</option>
            <option value="desk">Desk</option>
            <option value="cabinet">Cabinet</option>
          </select>
        </div>

        <div className="form-group">
          <label>Style</label>
          <select value={style} onChange={(e) => setStyle(e.target.value)}>
            <option value="modern">Modern</option>
            <option value="traditional">Traditional</option>
          </select>
        </div>

        <div className="form-group">
          <label>Material</label>
          <select value={material} onChange={(e) => setMaterial(e.target.value)}>
            {getMaterialOptions().map(mat => (
              <option key={mat} value={mat}>
                {mat.charAt(0).toUpperCase() + mat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Target Audience</label>
          <select value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)}>
            <option value="homeowners">Homeowners</option>
            <option value="businesses">Businesses</option>
          </select>
        </div>

        <button className="generate-btn" onClick={generateAd} disabled={loading}>
          {loading ? 'Generating...' : '✨ Generate Professional Ad'}
        </button>
      </div>

      {generatedAd && (
        <div className="result-container">
          <div className="result-header">
            <h2>Your Professional Ad</h2>
            <button className="copy-btn" onClick={copyToClipboard}>
              📋 Copy HTML
            </button>
          </div>

          <div className="preview-section">
            <h3>Preview</h3>
            <div dangerouslySetInnerHTML={{ __html: generatedAd }} />
          </div>

          <div className="html-section">
            <h3>HTML Code</h3>
            <pre className="code-block">{generatedAd}</pre>
          </div>
        </div>
      )}

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .header h1 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }

        .header p {
          color: #7f8c8d;
          font-size: 1.1rem;
        }

        .form-container {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .form-group select {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          background: white;
          cursor: pointer;
          transition: border-color 0.3s;
        }

        .form-group select:hover {
          border-color: #3498db;
        }

        .form-group select:focus {
          outline: none;
          border-color: #2980b9;
        }

        .generate-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .generate-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(102, 126, 234, 0.4);
        }

        .generate-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .result-container {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #ecf0f1;
        }

        .result-header h2 {
          color: #2c3e50;
          margin: 0;
        }

        .copy-btn {
          padding: 0.5rem 1rem;
          background: #27ae60;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s;
        }

        .copy-btn:hover {
          background: #229954;
        }

        .preview-section, .html-section {
          margin-bottom: 2rem;
        }

        .preview-section h3, .html-section h3 {
          color: #34495e;
          margin-bottom: 1rem;
        }

        .code-block {
          background: #2c3e50;
          color: #ecf0f1;
          padding: 1.5rem;
          border-radius: 8px;
          overflow-x: auto;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        :global(.ad-preview) {
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          padding: 2rem;
          background: #fafafa;
        }

        :global(.ad-headline) {
          font-size: 2rem;
          color: #2c3e50;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        :global(.ad-body) {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #34495e;
          margin-bottom: 1.5rem;
        }

        :global(.ad-cta) {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.1rem;
          display: inline-block;
        }

        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }

          .header h1 {
            font-size: 1.8rem;
          }

          .result-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          :global(.ad-headline) {
            font-size: 1.5rem;
          }

          :global(.ad-body) {
            font-size: 1rem;
          }
        }
      `}</style>
    </main>
  );
}
